### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [202](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  542.2<br />
<br />
Final Rank Value (542.2) = Starting Rank Value (581.9) + Head To Head Adjustments (-39.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.198[<sup>1</sup>](#table2)
- Bounty Collected: 0.151[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 581.9
- 400 + ( ( 0.088 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 581.9


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
|            8 |       36 | 2025-02-25 | KZG                  | L   | 0.927      | -            | -                | -                | -         |   -13.82 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            7 |       54 | 2025-02-24 | Rooster              | W   | 0.920      | 0.143        | 0.000 (0.000)    | 0.199 (0.026)    | 0 (0.000) |    16.41 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            6 |       74 | 2025-02-23 | TALON                | L   | 0.914      | -            | -                | -                | -         |   -16.96 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            5 |      218 | 2025-02-15 | Justice For Tomorrow | L   | 0.862      | -            | -                | -                | -         |   -16.23 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            4 |      221 | 2025-02-15 | BBBCBMBS             | W   | 0.861      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.28 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            3 |      257 | 2025-02-14 | Vantage Esports      | L   | 0.854      | -            | -                | -                | -         |   -16.39 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            2 |     2004 | 2024-10-10 | Rooster              | L   | 0.003      | -            | -                | -                | -         |    -0.04 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |
|            1 |     2005 | 2024-10-10 | Rooster              | W   | 0.002      | 0.333        | 0.000 (0.000)    | 0.199 (0.000)    | 0 (0.000) |     0.04 | cheeseball, cookie, Reapz, rekonz, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20.42)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $300.00        | $20.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
