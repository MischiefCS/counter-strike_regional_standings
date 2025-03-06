### Roster Details<br />
Team Name: Flashback Gaming<br />
Roster: clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn<br />
Global Rank: [69](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [10]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  765.7<br />
<br />
Final Rank Value (765.7) = Starting Rank Value (770.8) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.8
- 400 + ( ( 0.170 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 770.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        5 | 2025-02-28 | Victores Sumus | L   | 0.762      | -            | -                | -                | -         |    -8.98 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            4 |       11 | 2025-02-27 | Gods Reign     | L   | 0.755      | -            | -                | -                | -         |    -6.54 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            3 |       20 | 2025-02-26 | Big W          | W   | 0.749      | 0.143        | 0.005 (0.001)    | 0.034 (0.004)    | 1 (0.749) |     8.39 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            2 |     1416 | 2024-11-16 | Big W          | W   | 0.068      | 0.143        | 0.005 (0.000)    | 0.034 (0.000)    | 1 (0.068) |     0.78 | clouda, Defaulter, DiceDealer, Mcg1LLzZz, reV3nnnn |
|            1 |     1431 | 2024-11-16 | Victores Sumus | W   | 0.064      | 0.143        | 0.011 (0.000)    | 0.168 (0.002)    | 1 (0.064) |     1.26 | clouda, Defaulter, DiceDealer, Mcg1LLzZz, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($598.54)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.763 | $572.64        | $436.70         |
| 2024-11-16 |      0.068 | $2,367.49      | $161.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
