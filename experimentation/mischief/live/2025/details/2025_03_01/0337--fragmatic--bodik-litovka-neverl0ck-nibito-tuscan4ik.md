### Roster Details<br />
Team Name: Fragmatic<br />
Roster: bodik, Litovka, neverl0ck, nibito, Tuscan4ik<br />
Global Rank: [337](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [188]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  394.5<br />
<br />
Final Rank Value (394.5) = Starting Rank Value (401.0) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 401.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1262 | 2024-12-21 | C.S.D.E                    | L   | 0.732      | -            | -                | -                | -         |    -4.46 | bodik, Litovka, neverl0ck, nibito, Tuscan4ik |
|            7 |     1269 | 2024-12-21 | SkyFury                    | L   | 0.732      | -            | -                | -                | -         |    -4.79 | bodik, Litovka, neverl0ck, nibito, Tuscan4ik |
|            6 |     1282 | 2024-12-21 | WildHunt                   | W   | 0.731      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |    11.49 | bodik, Litovka, neverl0ck, nibito, Tuscan4ik |
|            5 |     2132 | 2024-11-30 | VOID GAMING (Russian team) | L   | 0.593      | -            | -                | -                | -         |    -9.76 | bodik, Litovka, t3zisswes, Tuscan4ik, xxlafy |
|            4 |     2159 | 2024-11-30 | ROYALS                     | L   | 0.591      | -            | -                | -                | -         |    -4.34 | bodik, Litovka, t3zisswes, Tuscan4ik, xxlafy |
|            3 |     2219 | 2024-11-28 | ZennoX                     | L   | 0.580      | -            | -                | -                | -         |    -4.04 | bodik, Litovka, t3zisswes, Tuscan4ik, xxlafy |
|            2 |     2246 | 2024-11-27 | BAKS Esports               | W   | 0.573      | 0.333        | 0.000 (0.000)    | 0.089 (0.017)    | 0 (0.000) |    11.23 | bodik, Litovka, t3zisswes, Tuscan4ik, xxlafy |
|            1 |     2255 | 2024-11-27 | Dark Cloud Esports         | L   | 0.572      | -            | -                | -                | -         |    -1.86 | bodik, Litovka, t3zisswes, Tuscan4ik, xxlafy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
