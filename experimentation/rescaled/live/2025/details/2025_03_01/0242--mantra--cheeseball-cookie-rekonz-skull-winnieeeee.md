### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [242](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  558.5<br />
<br />
Final Rank Value (558.5) = Starting Rank Value (612.9) + Head To Head Adjustments (-54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.9
- 400 + ( ( 0.112 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 612.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       36 | 2025-02-25 | KZG                  | L   | 1.000      | -            | -                | -                | -         |   -14.54 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|           12 |       54 | 2025-02-24 | Rooster              | W   | 1.000      | 0.491        | 0.003 (0.002)    | 0.219 (0.107)    | 0 (0.000) |    19.04 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|           11 |       74 | 2025-02-23 | TALON                | L   | 1.000      | -            | -                | -                | -         |   -18.22 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|           10 |      218 | 2025-02-15 | Justice For Tomorrow | L   | 1.000      | -            | -                | -                | -         |   -18.86 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            9 |      221 | 2025-02-15 | BBBCBMBS             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.79 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            8 |      257 | 2025-02-14 | Vantage Esports      | L   | 1.000      | -            | -                | -                | -         |   -18.87 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            7 |     2004 | 2024-10-10 | Rooster              | L   | 0.251      | -            | -                | -                | -         |    -3.44 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            6 |     2005 | 2024-10-10 | Rooster              | W   | 0.251      | 0.545        | 0.003 (0.000)    | 0.219 (0.030)    | 0 (0.000) |     4.54 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            5 |     2056 | 2024-10-09 | Only One Word        | L   | 0.244      | -            | -                | -                | -         |    -3.55 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            4 |     2060 | 2024-10-09 | Only One Word        | L   | 0.244      | -            | -                | -                | -         |    -3.62 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            3 |     2192 | 2024-10-04 | Vantage Esports      | L   | 0.216      | -            | -                | -                | -         |    -4.35 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            2 |     2561 | 2024-09-25 | DXA Esports          | W   | 0.151      | 0.521        | 0.000 (0.000)    | 0.035 (0.003)    | 0 (0.000) |     2.25 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            1 |     2567 | 2024-09-25 | DXA Esports          | L   | 0.151      | -            | -                | -                | -         |    -2.53 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.316 | $300.00        | $94.92          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
