### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [147](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  385.8<br />
<br />
Final Rank Value (385.8) = Starting Rank Value (401.1) + Head To Head Adjustments (-15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 401.1


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
|            6 |       36 | 2025-02-25 | KZG                  | L   | 0.553      | -            | -                | -                | -         |    -8.58 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            5 |       54 | 2025-02-24 | Rooster              | W   | 0.547      | 0.143        | 0.000 (0.000)    | 0.243 (0.019)    | 0 (0.000) |     9.02 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            4 |       74 | 2025-02-23 | TALON                | L   | 0.541      | -            | -                | -                | -         |    -8.21 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            3 |      218 | 2025-02-15 | Justice For Tomorrow | L   | 0.489      | -            | -                | -                | -         |    -7.60 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            2 |      221 | 2025-02-15 | BBBCBMBS             | W   | 0.488      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.57 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            1 |      257 | 2025-02-14 | Vantage Esports      | L   | 0.480      | -            | -                | -                | -         |    -7.46 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
