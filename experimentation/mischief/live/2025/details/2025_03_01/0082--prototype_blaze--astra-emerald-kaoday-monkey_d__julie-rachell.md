### Roster Details<br />
Team Name: Prototype Blaze<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL<br />
Global Rank: [82](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [55]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  847.1<br />
<br />
Final Rank Value (847.1) = Starting Rank Value (854.0) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.0
- 400 + ( ( 0.232 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 854.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      873 | 2025-02-02 | Permitta W                  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.20 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            6 |      893 | 2025-02-01 | Eco Warriors                | L   | 1.000      | -            | -                | -                | -         |   -17.89 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            5 |     2720 | 2024-11-14 | Team Poland (Female team)   | L   | 0.486      | -            | -                | -                | -         |    -6.34 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            4 |     2742 | 2024-11-14 | Team Portugal (Female team) | W   | 0.484      | 0.557        | 0.029 (0.008)    | 0.080 (0.021)    | 1 (0.484) |     6.93 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            3 |     2771 | 2024-11-13 | Team Denmark (Female team)  | W   | 0.477      | 0.557        | 0.010 (0.003)    | 0.062 (0.017)    | 1 (0.477) |     4.16 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            2 |     2833 | 2024-11-11 | Team Sweden (Female team)   | W   | 0.466      | 0.557        | 0.007 (0.002)    | 0.026 (0.007)    | 1 (0.466) |     2.94 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            1 |     2842 | 2024-11-11 | Messitas                    | W   | 0.465      | 0.557        | 0.000 (0.000)    | 0.056 (0.014)    | 1 (0.465) |     1.07 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,458.33)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.486 | $40,000.00     | $19,458.33      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
